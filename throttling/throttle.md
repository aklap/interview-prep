# Throttling

## Definition:

__Throttling__ is the act of limiting the amount of times a function is invoked or called over some time period.

Therefore, throttling requires a function and some time period (a delay).

Throttling can postpone the successful execution of the last call until after the time period elapses.

As in most JS, the last call is the one that gets executed, since successive calls in JS override previous ones, (ie, the last is the only one that matters.).

Real world uses cases: 

- Throttling an API call (GitHub API, 'rate limiting') to manage resources or in the case of something like TicketMaster type companies
- Throttling a mousemove/touchmove event handler like resizing a window
- Animation

NOTE: Is it true that throttling is used less than debounce? Debounce over throttling?


