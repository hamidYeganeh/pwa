"use server";

import webpush from "web-push";

const VAPID_PUBLIC_KEY =
  "BJHi7AktEHH_yPNkjC09uBxoFGfWzoJgdqCCe2INpLwyXat5DZf79J56cIV0RlNeyw8Zvskm2u46ooFEe6FQZLA";
const VAPID_PRIVATE_KEY = "p5nuN5SoahQKRS7jc02ZZVDbD3O7g5Kj_LCuo-WuXyI";

webpush.setVapidDetails(
  "<mailto:hamidyeganeh82@gmail.com>",
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

let subscription: PushSubscription | null = null;

export async function subscribeUser(sub: PushSubscription) {
  subscription = sub;
  // In a production environment, you would want to store the subscription in a database
  // For example: await db.subscriptions.create({ data: sub })
  return { success: true };
}

export async function unsubscribeUser() {
  subscription = null;
  // In a production environment, you would want to remove the subscription from the database
  // For example: await db.subscriptions.delete({ where: { ... } })
  return { success: true };
}

export async function sendNotification(message: string) {
  if (!subscription) {
    throw new Error("No subscription available");
  }

  try {
    await webpush.sendNotification(
      subscription as any,
      JSON.stringify({
        title: "Test Notification",
        body: message,
        icon: "/icon.png",
      })
    );
    return { success: true };
  } catch (error) {
    console.error("Error sending push notification:", error);
return { success: false, error: "Failed to send notification" };
  }
}
