   let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];


   function getcourseDate(courses, coursedate)
   {
    let numCourses = courses.length;
    
   for (let i = 0; i < numCourses; i++)
   {
    if (courses[i].CourseId==coursedate)
    {
        return courses[i].StartDate
    }
    }
   }
 console.log ("The PROG200 course starts " + (getcourseDate(courses, "PROG200")))
//--------------------------------------------------------------------------------------------------------//
 function getcourseTitle(courses, courseId)
   {
    let numCourses = courses.length;
    
   for (let i = 0; i < numCourses; i++)
   {
    if (courses[i].CourseId==courseId)
    {
        return courses[i].Title
    }
    }
   }
 console.log ("PROJ500 Course title is " + (getcourseTitle(courses, "PROG200")))
//-------------------------------------------------------------------------------------------------------------//
function getcourseFee(courses)
{
 let numCourses = courses.length;
 let fifty = [];
for (let i = 1; i < numCourses; i++)
{
 if (courses[i].Fee<=50)
 {
     fifty.push(courses[i].Title);
 }
 }
 return fifty
}
console.log ("The Courses that cost $50 is " + (getcourseFee(courses)))
//-------------------------------------------------------------------------------------------------------------//
function getcourseLocation(courses)
{
 let numCourses = courses.length;
 let course1 = [];
for (let i = 1; i < numCourses; i++)
{
 if (courses[i].Location=="Classroom 1")
 {
     course1.push(courses[i].Title);
 }
 }
 return course1
}
console.log ("The classes that meet in classroom 1 is " + (getcourseLocation(courses)))