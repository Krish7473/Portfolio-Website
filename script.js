//  Name: KRISH PATEL
// File Name: script.js 
// Date: 01/07/2023 
// Brief Description: This is a script for courses page which add functionallity to the page like Search adn Sorting.

// Below code is for Search functionality.
    function searchCourse() {
        var searchInput = document.getElementById('search').value.toLowerCase();
        var courseItems = document.querySelectorAll('#courseList li');
    
        for (var i = 0; i < courseItems.length; i++) {
        var courseTitle = courseItems[i].querySelector('h3').textContent.toLowerCase();
    
        if (courseTitle.includes(searchInput)) {
            courseItems[i].style.display = 'block';
        } else {
            courseItems[i].style.display = 'none';
        }
        }
    }
  // Below code is for Sorting courses by level.
    function sortCourses() {
        var sortSelect = document.getElementById('sortLevel');
        var selectedValue = sortSelect.value;
        var courseItems = document.querySelectorAll('#courseList li');
        var sortedCourseItems = Array.from(courseItems);
    
        sortedCourseItems.sort(function (a, b) {
        var levelA = a.querySelector('p:nth-child(2)').textContent;
        var levelB = b.querySelector('p:nth-child(2)').textContent;
    
        if (selectedValue === 'asc') {
            return levelA.localeCompare(levelB);
        } else if (selectedValue === 'desc') {
            return levelB.localeCompare(levelA);
        }
        });
    
        var courseList = document.getElementById('courseList');
        courseList.innerHTML = '';
    
        for (var i = 0; i < sortedCourseItems.length; i++) {
        courseList.appendChild(sortedCourseItems[i]);
        }
    }