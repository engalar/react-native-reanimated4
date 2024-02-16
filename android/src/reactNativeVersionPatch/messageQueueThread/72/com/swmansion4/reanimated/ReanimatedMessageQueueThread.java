package com.swmansion4.reanimated;

import com.facebook.proguard.annotations.DoNotStrip;
import com.swmansion4.reanimated.ReanimatedMessageQueueThreadBase;

@DoNotStrip
public class ReanimatedMessageQueueThread extends ReanimatedMessageQueueThreadBase {
  @Override
  public boolean runOnQueue(Runnable runnable) {
    return messageQueueThread.runOnQueue(runnable);
  }
}
