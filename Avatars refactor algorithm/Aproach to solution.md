## Approach to solution

Sadly I ran out of time to properly solve this exercise, however I made a lot of research about it and multiple failed solutions, which I want to share:

* First, I wanted to understand how the avatars could be optimized, something like a "lazy-load" in case the images were too big, but I fount they were already optimized: in size and quality. So I concluded the problem was related to thousands of request being triggered.

* After reading and understanding the code, it was evident to me the use of promises to solve the original problem. However, what is asked to do (abort/cancel a promise), is not possible by default due to the self nature of promises.

* Having this in mind I tried to create a custom implementation of a promise that could be canceled, but it didn't work. The last 10 images were still being loaded in a big amount of time.

* Another approach was to use external libraries like Bluebird or RxJS in order to use Observables. I wasn't sure about this non-vanilla approach, but I would like to give it a try to Observables.

* Lastly, I tried to create my custom PromiseAll with a queue that could be set as empty and returned in case of Abort, but it didn't work as the images were still requested after the Abort/Cancel.

I consider this as a very interesting challenge, so next step for me is deeply understand the problems that promises may solve and how to achieve them using a different approach (reactive programming for example).  
