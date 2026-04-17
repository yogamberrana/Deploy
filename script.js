function bookRoom(e) {
  e.preventDefault();

  // Get form data (optional if you add inputs later)
  const form = e.target;

  // Show loading message
  const btn = form.querySelector("button");
  const originalText = btn.innerText;

  btn.innerText = "Processing...";
  btn.disabled = true;

  setTimeout(() => {
    
    // Success message on screen
    alert("✅ Booking Successful! We will contact you soon.");

    // Reset form
    form.reset();

    // Restore button
    btn.innerText = originalText;
    btn.disabled = false;

    // Log booking (for admin use)
    console.log("New Booking Received ✔");

    // OPTIONAL: WhatsApp redirect (uncomment if needed)
    // window.open("https://wa.me/919911344791?text=New%20Room%20Booking%20Received", "_blank");

  }, 1500);
}