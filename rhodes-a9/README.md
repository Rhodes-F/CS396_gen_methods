# A9: Hand Tracking

## Your name
Rhodes Fotopulos
## Your Glitch link
[my page](https://rhodes-a9.glitch.me)


## Describe the experience you designed
NOTE: I was trying to design a sign language interpreter but I coudl not get the modle to train. I was able to record the data but coudl not generate the weights. 

## For each hand gesture it responds to, what does it do?
the two hand gestures are a lash which is oyur hand sideways and a block whihc is holding up your hand in a stop. based off of this it changes all the points on the hand to the predicted emoji. A sound is also played when you go to slash or from slash. The background color also coresponds to the state that is predicted. 
## How are you visualizing or changing graphics with the gesture?
I used the bock or slash model for each of the options it changes all the points on the hand to the predicted emoji. A sound is also played when you go to slash or from slash. The background color also coresponds to the state that is predicted. 

## What gestures mentioned in the Lingthusiasm podcast are related to your gestures?
I trried to start out with actual sign language which was not gestures but when that did not work I used only gestures. The block is a well known gesture which is used as a way of saying stop and the slash mirrors the action of chopping of slashing with your hand. 


## How long did it take to train your network with this Handsfree-handtracking approach?
I tried to get the hands free network to work for about an hour on the sign language before giving up and using the pre-trained model from class. 

## Which gestures did it guess wrong and when? What could have improved that training data?
It gets confused sometimes when you are doing the slash a little too close to the camera or if you are using the back of your hand to make the gesture. I could have retrained this to do better by putting the slash in more positions but I coudln't get the training to work. The block also experienced problems when I tried to do it on the left side of my screen which was probably becasue only the slice has data baout the lef side of the screen. 

## How long did it take to train the network with the Teachable Machine pixel-based approach?

Maybe 2 minuets. 


## How did the quality of predictions compare between them?

The teachable machines was better at predicting the slash because I think it could do it based off my whole arm and hand and not just my hand. 

## How did the quality of predictions on Teachable Machine change when you changed the background or lighting?

Yes. Beecause it was pixle data if i Put on a new shirt or dimmed the lights in my room the predictions worked much worse. 
## List any resources (code, images, etc) you've used, and where you got them from

--your answer here--

## List any help you got from classmates or websites, so that you can remember it for later

--your answer here--