import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';

export default function Hourglass() {
    const [workTime, breakTime, totalIntervals] = [1,1,3]
    const [timeRemaining, setTimeRemaining] = useState(workTime * 60);
    const [intervalCount, setIntervalCount] = useState(0);
    const [isWorking, setIsWorking] = useState(true);
    const totalTime = isWorking ? workTime * 60 : breakTime * 60;
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (timeRemaining > 0) {
          setTimeRemaining(timeRemaining - 1);
        } else {
          clearInterval(interval);
          if (isWorking) {
            if (intervalCount < totalIntervals - 1) {
              setIsWorking(false);
              setIntervalCount(intervalCount + 1);
              setTimeRemaining(breakTime * 60);
            } else {
              // End of last work interval
              // Do something here, such as showing a message or sound
            }
          } else {
            setIsWorking(true);
            setTimeRemaining(workTime * 60);
          }
        }
      }, 1000);
  
      return () => clearInterval(interval);
    }, [timeRemaining, isWorking]);
  
    const sandHeight = timeRemaining / totalTime * 100;
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 100, height: 200, borderWidth: 1, borderColor:isWorking ? '#789CD8' : 'red' }}>
          <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0, top: `${sandHeight}%`, backgroundColor: isWorking ? '#789CD8' : 'red' }} />
        </View>
        <Text>{isWorking ? 'Work' : 'Break'} interval {intervalCount + 1} of {totalIntervals}</Text>
        <Text>{Math.floor(timeRemaining / 60)}:{('0' + (timeRemaining % 60)).slice(-2)}</Text>
      </View>
    );
  };
