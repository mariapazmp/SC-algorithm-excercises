## Issues Discovered and solved:

1. Nested loops: they always trigger performance warnings (O(N * M) complexity on Big-O notation). If it's strictly necessary to do it, we have to evaluate what can be done outside of the loop.
2. When running a performance evaluation using Chrome Devtools, I confirmed the warning inside of the nested loop (_see screenshots of **test-1-waveform**_).
3. Inside of the nested loop, I found `ctx.fillStyle` was being defined multiple times and wasn't linked with the variable of the loop (y).

    I decided to put it outside, also because in Canvas, you can define the `filStyle`, but the shape is not painted until you use the `fillRect` or similar.
    
    Then I ran again the Performance Evaluation of Chrome, and it was confirmed: the performance of this line was improved from 4200ms to 350ms (_see screenshot **test2-waveform-short**_)

4. Variables `width` and `height`: those were not linked to the loop variable (x), I decided to place their definition outside.
This improved the performance time from 15ms to 0.1ms, each line.
