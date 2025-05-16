"use server"

export async function joinWaitlist(email: string) {
  // Simulate a delay to mimic server processing
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real application, you would store the email in a database
  // For now, we'll just return success
  return { success: true }
}