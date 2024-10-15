```1. What is LibUV?```
Libuv is responsible for performing non-blocking asynchronous I/O operations  operations in NodeJs by providing an event loop and a thread pool. The libuv consists of the event loop,event loop queues aand microtask


```2. Explain the difference between setImmediate(f) and setTimeout(f, Time)?```
setImmediate(f) schedules a callback to run in the check phase of the event loop after I/O events. It's generally used when you want the callback to run as soon as possible after the current event loop phase finishes.

setTimeout(f, time) schedules a callback in the timers phase of the event loop, which will execute after a minimum delay specified by time. The actual execution time may be longer due to other operations in the event loop.



```3. Explain the difference between process.nextTick(f) and setImmediate(f)?```
process.nextTick(f) schedules a callback to execute immediately after the current operation completes and before the event loop continues to the next phase. It runs in the nextTick queue, which has higher priority than any other phases or queues in the event loop.

setImmediate(f) schedules a callback in the check phase of the event loop and will execute after I/O events and timers. While both process.nextTick(f) and setImmediate(f) defer execution, process.nextTick(f) executes earlier in the event loop, before any I/O or timers.
