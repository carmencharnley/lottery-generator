# Create a Euromillions lottery ball generator

## User story - who, what, why? (Three Cs - card (ticket), conversation, confirmation)

### Conversation

- How many numbers in total, how many are picked, rules, trigger, styling and presentation, security, randomisation, systems links, duplication/number coming out twice, how is information stored/utilised, record, additional requirements from stakeholders

### Confirmation/acceptance criteria

- Joe expects to be given 7 numbers
- Joe expects 5 regular random integers 1-50
- Joe expects 2 lucky star random integers 1-12
- Joe expects to not get duplicates in a set but it's okay across both sets
- Joe expects the numbers to be in ascending order per set

### Interface

- How the user interacts
- What do we get what we want from it
- What we publicly expose
- Return is an object with two values (regular numbers and lucky stars)

### Data

- Return data
- One array of 5 numbers
- Boundary of 1 - 50
- One array of 2 numbers
- Boundary of 1 - 12 for lucky stars

### Logic

- No duplicates in each array
- Random number between boundaries
- Whole Numbers
- Ascending order in each array
- Combine the 2 arrays into one

### Ensure no coupling between tests
