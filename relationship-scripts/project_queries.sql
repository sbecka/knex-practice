--How many people work in the Sales department?
1. SELECT COUNT(*) 
   FROM 
    employee e 
    JOIN department d 
    ON e.department = d.id 
    WHERE d.dept_name = 'Sales'; --> Returns 4.

--List the names of all employees assigned to the 'Plan Christmas party' project.
2. SELECT 
    e.emp_name as full_name, 
    p.project_name 
   FROM 
    employee e 
    JOIN employee_project ep 
    ON e.id = ep.emp_id 
    JOIN project p 
    ON ep.project_id = p.id 
    WHERE p.project_name = 'Plan christmas party'; --> Toby Flenderson, Plan christmas party

--List the names of employees from the Warehouse department 
--that are assigned to the 'Watch paint dry' project.
3. SELECT
    e.emp_name as full_name,
    d.dept_name
   FROM
    employee e
    JOIN department d
    ON e.department = d.id
    JOIN employee_project ep
    ON e.id = ep.emp_id
    JOIN project p
    ON ep.project_id = p.id
    WHERE d.dept_name = 'Warehouse'
    AND p.project_name = 'Watch paint dry'; --> 0 rows, no employees from warehouse dept eork on this project

--Which projects are the Sales department employees assigned to?
4. SELECT
    e.emp_name as full_name,
    d.dept_name,
    p.project_name
   FROM
    employee e
    JOIN department d
    ON e.department = d.id
    JOIN employee_project ep
    ON e.id = ep.emp_id
    JOIN project p
    ON ep.project_id = p.id
    WHERE d.dept_name = 'Sales'; -->All sales employees are working on 'Watch paint dry' project

--List only the managers that are assigned to the 'Watch paint dry' project.
5. SELECT
    e.emp_name as manager_name,
    d.dept_name,
    p.project_name
   FROM
    employee e
    JOIN department d
    ON e.id = d.manager
    JOIN employee_project ep
    ON e.id = ep.emp_id
    JOIN project p
    ON ep.project_id = p.id
    WHERE p.project_name = 'Watch paint dry'; -->Jim Halpert is the only manager of Sales dept workinf on this project.

OR

SELECT
    e.emp_name as managers,
    e.title,
    p.project_name
FROM
    employee e
    JOIN employee_project ep
    ON e.id = ep.emp_id
    JOIN project p
    ON ep.project_id = p.id
    WHERE p.project_name = 'Watch paint dry'
    AND e.title LIKE '%Manager%'; --> Michael and Dwight have 'Manager' in their job title and work on this project