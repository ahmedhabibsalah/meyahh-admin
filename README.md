In the project directory, you can run:

### `npm install`

Then

### `npm start`

## Authintacation

![Capture](https://github.com/ahmedhabibsalah/meyahh-admin/assets/47088971/541ff227-d537-4cb3-a75c-5451461e07d3)

#### Email: ahmed123@mail.com
#### Password: 123456

Authentication Done With Firebase.

###### The Problem I was facing with the RBAC is That JSON-SERVER does not seem to support RBAC so I used Firebase For Authentication and as a Store for the Users Data
###### The Other Problem I didn't know how to customize the auth to read the data from the collection as the firestore and the authentication are separated
###### My workaround for this problem is that I implemented a toggle System to view each Role's Action

![Capture2](https://github.com/ahmedhabibsalah/meyahh-admin/assets/47088971/9a09860d-a4d8-4dd5-9d89-4c4dfdebd5fb)

####First The Member
######Only The member data appear in this tab that happened by using the filter attribute which needs the role to be equal to member and the active-status to be equal to true

![Capture3](https://github.com/ahmedhabibsalah/meyahh-admin/assets/47088971/525b3c9e-75ea-4874-a675-a89e8aa399bc)

####Second The Librarian
######All The Data appear here but the edit button is conditioned to only the member and the admin That happened by using useRecordContext() Method which allows me to access the record and add conditions to my components

![Capture4](https://github.com/ahmedhabibsalah/meyahh-admin/assets/47088971/f12aad1c-2fd7-4d1a-9aca-5accb50a6c8d)

####Third The Admin
######All The Data appear here and all the required actions can be done there including the active-status toggle that when the boolean equal to false it will remove the data attached to this id from the other tabs
