# Ticket System

System to control user shifts via tickets. It is controlled by desks that are calling the tickets.
It was developed with with node.js. express and sockets to update automatically the different views.

# Features:
- User can generate a new ticket
![lasticket](https://user-images.githubusercontent.com/49765252/89687288-93ea8a80-d8c5-11ea-9f42-2e1e7ca927f4.JPG)
![ticket17](https://user-images.githubusercontent.com/49765252/89687333-ab297800-d8c5-11ea-84e4-d03304572e41.JPG)

- Desk system to attend tickets one by one
![principalpage](https://user-images.githubusercontent.com/49765252/89687932-b92bc880-d8c6-11ea-8e79-378631265f3e.JPG)
![desk1](https://user-images.githubusercontent.com/49765252/89687934-b9c45f00-d8c6-11ea-856e-0551800d3c2a.JPG)
![desks](https://user-images.githubusercontent.com/49765252/89687937-ba5cf580-d8c6-11ea-8279-89a8b2a3a631.JPG)

- Public screen to see number of ticket and which desk is servicing it.
![publicScreen](https://user-images.githubusercontent.com/49765252/89688088-145dbb00-d8c7-11ea-8337-606b0b328e10.JPG)
If any desk attends a new ticket, this view is automatically updated:
![update](https://user-images.githubusercontent.com/49765252/89688351-964de400-d8c7-11ea-8cb2-342d898303ae.JPG)


- If for any reason the server restarts, the list of tickets until that moment remains safe.
- Every day tickets data is cleaned.

If you want to see and test, you can go to https://ticket-system-juan.herokuapp.com/

Remember to run "npm install" if you want to see this project locally.


