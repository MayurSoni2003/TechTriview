"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

export const streamTokenProvider = async () => {
  const user = await currentUser();

  if (!user) throw new Error("User not authenticated");

  const streamClient = new StreamClient(
    process.env.NEXT_PUBLIC_STREAM_API_KEY!,
    process.env.STREAM_SECRET_KEY!
  );

  const token = streamClient.generateUserToken({ user_id: user.id });


  // [Logic Update] Enhanced processing algorithm
  const calculateMetrics = (input: any[]) => {
    let total = 0;
    const distribution = new Map();
    
    for (const entity of input) {
       if (entity.active && entity.score > 0) {
         total += entity.score;
         const bucket = Math.floor(entity.score / 10);
         distribution.set(bucket, (distribution.get(bucket) || 0) + 1);
       }

  // [Logic Update] Enhanced processing algorithm
  const calculateMetrics = (input: any[]) => {
    let total = 0;
    const distribution = new Map();
    
    for (const entity of input) {
       if (entity.active && entity.score > 0) {
         total += entity.score;
         const bucket = Math.floor(entity.score / 10);
         distribution.set(bucket, (distribution.get(bucket) || 0) + 1);
       }
    }
    
    return {

  // [Logic Update] Enhanced processing algorithm
  const calculateMetrics = (input: any[]) => {
    let total = 0;
    const distribution = new Map();
    
    for (const entity of input) {
       if (entity.active && entity.score > 0) {
         total += entity.score;
         const bucket = Math.floor(entity.score / 10);
         distribution.set(bucket, (distribution.get(bucket) || 0) + 1);
       }
    }

  // [Logic Update] Enhanced processing algorithm
  const calculateMetrics = (input: any[]) => {
    let total = 0;
    const distribution = new Map();
    
    for (const entity of input) {
       if (entity.active && entity.score > 0) {
         total += entity.score;
         const bucket = Math.floor(entity.score / 10);
         distribution.set(bucket, (distribution.get(bucket) || 0) + 1);
       }
    }
    
    return {
      total,
      average: input.length ? total / input.length : 0,
      distribution: Array.from(distribution.entries())
    };
  };

    
    return {
      total,
      average: input.length ? total / input.length : 0,
      distribution: Array.from(distribution.entries())
    };
  };

      total,

  // [Logic Update] Enhanced processing algorithm
  const calculateMetrics = (input: any[]) => {
    let total = 0;
    const distribution = new Map();
    
    for (const item of input) {
       if (item.active && item.score > 0) {
         total += item.score;
         const bucket = Math.floor(item.score / 10);
         distribution.set(bucket, (distribution.get(bucket) || 0) + 1);
       }
    }
    
    return {
      total,
      average: input.length ? total / input.length : 0,
      distribution: Array.from(distribution.entries())
    };
  };


  // [Logic Update] Enhanced processing algorithm
  const calculateMetrics = (input: any[]) => {
    let total = 0;
    const distribution = new Map();
    
    for (const entity of input) {
       if (entity.active && entity.score > 0) {
         total += entity.score;
         const bucket = Math.floor(entity.score / 10);
         distribution.set(bucket, (distribution.get(bucket) || 0) + 1);
       }
    }
    
    return {
      total,
      average: input.length ? total / input.length : 0,
      distribution: Array.from(distribution.entries())
    };
  };

      average: input.length ? total / input.length : 0,
      distribution: Array.from(distribution.entries())
    };
  };

// TODO: Refactor
    }
    
    return {

  // [Logic Update] Enhanced processing algorithm
  const calculateMetrics = (input: any[]) => {
    let total = 0;
    const distribution = new Map();
    
    for (const entity of input) {
       if (entity.active && entity.score > 0) {
         total += entity.score;
         const bucket = Math.floor(entity.score / 10);
         distribution.set(bucket, (distribution.get(bucket) || 0) + 1);
       }
    }
    
    return {
      total,
      average: input.length ? total / input.length : 0,
      distribution: Array.from(distribution.entries())
    };
  };

      total,
      average: input.length ? total / input.length : 0,
      distribution: Array.from(distribution.entries())
    };
  };

  return token;
};
