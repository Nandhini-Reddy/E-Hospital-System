const doctors = ["Dr. Smith", "Dr. John", "Dr. Jane"];
const appointments = [];

window.onload = () => {
    const list = document.getElementById("doctorList");
    if (list) {
        doctors.forEach(doc => {
            const opt = document.createElement("option");
            opt.value = doc;
            opt.textContent = doc;
            list.appendChild(opt);
        });
    }
    showSection('home');
};

function showSection(id) {
    document.querySelectorAll("main section").forEach(sec => sec.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
}

function bookAppointment() {
    const doctor = document.getElementById("doctorList").value;
    const name = document.getElementById("patientName").value;
    const age = document.getElementById("patientAge").value;
    if (!name || !age) {
        alert("Please enter your name and age.");
        return;
    }
    appointments.push({ doctor, name, age, status: "Pending" });
    alert(`Appointment with ${doctor} booked for ${name}.`);
    updateDoctorView();
}

function updateDoctorView() {
    const container = document.getElementById("appointmentRequests");
    if (container) {
        container.innerHTML = "";
        appointments.forEach((a, i) => {
            container.innerHTML += `<div><strong>${a.name} (Age: ${a.age})</strong> - ${a.doctor} - ${a.status} <button onclick="acceptAppointment(${i})">Accept</button> <button onclick="rejectAppointment(${i})">Reject</button></div>`;
        });
    }
}

function acceptAppointment(i) {
    appointments[i].status = "Accepted";
    updateDoctorView();
}

function rejectAppointment(i) {
    appointments[i].status = "Rejected";
    updateDoctorView();
}

function storePrescription() {
    const text = document.getElementById("prescription").value;
    if (!text) {
        alert("Please enter a prescription.");
        return;
    }
    alert("Prescription saved and available to all departments.");
}

function updateLabResult() {
    const pid = document.getElementById("labPatientId").value;
    const result = document.getElementById("labResult").value;
    if (!pid || !result) {
        alert("Enter both patient ID and result.");
        return;
    }
    alert(`Lab result for Patient ${pid} updated.`);
}

function updateStock() {
    const stock = document.getElementById("stockDetails").value;
    if (!stock) {
        alert("Enter stock details.");
        return;
    }
    alert("Pharmacy stock updated.");
}

function generateBill() {
    const pid = document.getElementById("billingPatientId").value;
    if (!pid) {
        alert("Enter Patient ID.");
        return;
    }
    document.getElementById("billOutput").innerText = `Billing for Patient ${pid} generated.`;
}

function generateDoctorAvailabilityReport() {
    document.getElementById("reportOutput").innerText = `Available Doctors: ${doctors.join(", ")}`;
}

function generatePatientReport() {
    document.getElementById("reportOutput").innerText = `Total appointments today: ${appointments.length}`;
}

function generatePharmacyReport() {
    document.getElementById("reportOutput").innerText = "Pharmacy deliveries completed: 10";
}
