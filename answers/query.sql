SELECT 
  ID,
  UserName,
  (
    SELECT UserName 
    FROM USER 
    WHERE ID = u.Parent
  ) ParentUserName 
FROM `USER` as u