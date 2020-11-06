## Approach to solution

Sadly I ran out of time to properly solve this exercise, however I made a lot of research about it, which I want to share:

After reading and understanding the code, it was evident to me the use of promises to solve the problem. However, what is asked to do (abort/cancel a promise), is not possible by default due to the self nature of promises.

Having this in mind I tried to create a custom implementation of a promise that could be canceled, but it didn't work. The last 10 images were still being loaded in a big amount of time.

Another approach was to use external libraries like Bluebird or RxJS in order to use Observables. I wasn't sure about this non-vanilla approach, but for sure I would like to give it a try to Observables.
