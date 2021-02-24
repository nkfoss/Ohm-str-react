# Types of Sets

The basic weight training set has two properties: weight and repititions (reps). For these objects we have a interface called `"BasicSet"`.

But there is more information about a set that we might want to know, such as the percent of record (the property of `'percentRecord'` in our app).

### What is the `percentRecord`?

The `percentRecord` is our metric for measuring progress. But there is something you need to understand first... **One-repetition maximum (1rm)** in weight training is the maximum amount of weight that a person can possibly lift for one repetition. Given a weight and number of reps, we can use a formula to calculate a person's 1rm.

Example: A person squats 210 lbs. for five repetitions ... the calculated 1rm is ~236 lbs. (https://strengthlevel.com/one-rep-max-calculator)

Now imagine during the following week, the same person squats 225 lbs, but only four repetitions. They increased the weight, but they also did fewer reps.... did they get stronger? We can calculate it... This time their calculated 1rm is ~245 lbs.

(245 lbs. / 225 lbs. = 1.09)

They are about 1.09 times stronger than last time. **This is `percentRecord`.**

Another use case for this: someone bench-presses 150 lbs. for 10 reps ... their 1rm is ~200lbs. They gave 100% effort, so we can be certain that 200 lbs is accurate.

The following week, the same person decides that they are going to INCREASE the weight, but DON'T want to give 100% effort. Therefore, they bench-press 170 lbs. for 4 reps... how much effort did they give? We can calculate this with the 1rm calculated from the previous week, and the one from this week (189 lbs).

189 / 200 = 0.945

So they intentionally gave about 94% effort this week. Keep in mind, we only wanted to know how hard they worked assuming they weren't trying their hardest. On the other hand, if they did the same weight/reps, but were ACTUALLY giving 100%... then this is an indication that they got weaker (somehow).  

*NOTE: Periodically giving less than 100% is actually a good practice for strength training. Going full-bore on a given exercise, especially for multiple sets, iincreases the risk of burnout and/or injury. Sometimes you need to add easier stuff to your program in order to improve.*

These are our reasons to track `percentRecord`. For this we use the `EffortSet` interface (extends `BasicSet`)

#### But why not make it part of `interface BasicSet`?

Because not all set types can have the 1rm formula applied to them. For example, mTOR-sets require the user to extend the 'negative' portion of the lift to many times the length of the 'lifting' portion. Think of doing a bicep curl, and then slooowly lowering the weight back down to the beginning. 

The main obstacle for using a 1rm formula with mTOR sets... these sets are QUALITATIVELY different than regular sets. The underlying biological factors that influence performance on an mTOR set are fundamentally different than those on a regular set. You can try to use the 1rm formula, but you will find it is unreliable. Therefore comparing records between varying rep/weight combinations is impossible (with our knowledge).

*More info on mTOR : http://www.paramounttraining.ca/2014/11/mtor.html*

*(There are other sets where 1rm does not apply, but we are only using mTOR in our app.)*
### So, what other sets use percent effort?

##### Regular Sets ... [`interface EffortSet`]

Yep, you can do this with regular old sets. We only need weight, reps, and percentRecord, so the `EffortSet` interface is what we'll use.

##### Rest-Pause-Sets ... [`interface RestPauseSet`]

A rest pause is like a regular set, but instead of quitting after the last rep you wait a specified amount of time (usually less than 20 secs). Then you try to complete a specified number of reps. Rest and repeat as instructed.

***NOTE***: *Myo-rep, rest-pause-double, and heavy-cluster sets are specific types of rest-pause sets that will be used in the app, but will use the `RestPauseSet` interface.*

In this case, the first part of the set (before the rest/repeats) can be used to gauge someone's 1rm, so we can use `percentRecord` here. However, the sets following the short rest period are not applicable. In the interface, the `restPauseSets` property (`BasicSet array`) comprises all the sets following the initial rest period (and `percentRecord` is not a property of `BasicSet`).

##### Drop-sets ... [`interface DropSet`]

A drop set is like a regular set, but instead of quitting after the last rep, you IMMEDIATELY lower the weight a specified percentage, and then continue reps. Lower/repeat as many times as specified.

Similar to the `RestPause` set, the first portion can be used to calculate 1rm. However, the sets that get chained-on to the first do not count. 


