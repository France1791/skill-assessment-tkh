# Skill Assessment Part 2: Backend

## Instructions

There seems to be some bugs with this server.

1. There is a one to many relationship missing in the prisma schema between movies and actors. The movie schema is fine. The actors schema needs adjusting for the relationship to be complete.
2. The GET route for movies seems to not be sending any movie data as an array, empty or not. It keeps sending back an object and that is not supposed to happen. Please fix so that way it sends either an empty array from the Database OR sends back some data from the database.
3. The POST route seems to be ok BUT it could use better error handling in case the user does not send the proper data to that route. Please fix it up so that way its better handled.

Once all 3 are satisfied, make sure to push up the work to YOUR forked repo.
