'use client';

import jsPDF from 'jspdf';

interface GenerateBillButtonProps {
  tripDetails: {
    origin: string;
    destination: string;
    stops: string[];
    departDate: string;
    returnDate: string;
    operator: string;
    type: string;
    passengers: number;
  };
  fareDetails: {
    basePrice: number;
    gst: number;
    totalPrice: number;
  };
}

export default function GenerateBillButton({ tripDetails, fareDetails }: GenerateBillButtonProps) {
  const handleGeneratePDF = () => {
    // Collect the user details currently typed into the form
    const name = (document.getElementById('name') as HTMLInputElement)?.value?.trim();
    const age = (document.getElementById('age') as HTMLInputElement)?.value?.trim();
    const gender = (document.getElementById('gender') as HTMLSelectElement)?.value?.trim();
    const email = (document.getElementById('email') as HTMLInputElement)?.value?.trim();
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value?.trim();

    if (!name || !age || !gender || !email || !phone) {
      alert('Please fill in all passenger details before generating the bill.');
      return;
    }

    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    // --- HEADER BANNER ---
    doc.setFillColor(37, 99, 235); // Blue-600 color
    doc.rect(0, 0, pageWidth, 40, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.text('Sri Kela Travels', 20, 25);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text('Booking Invoice', pageWidth - 20, 25, { align: 'right' });

    // Helper for Section Titles
    const addSectionTitle = (title: string, y: number) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(37, 99, 235); // Blue title
      doc.text(title, 20, y);
      doc.setDrawColor(226, 232, 240); // Light gray line
      doc.setLineWidth(0.5);
      doc.line(20, y + 2, pageWidth - 20, y + 2);
      doc.setTextColor(51, 65, 85); // Reset text color to dark gray
    };

    let yPos = 55;

    // --- 1. TRIP DETAILS ---
    addSectionTitle('Trip Details', yPos);
    yPos += 12;
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text(`${tripDetails.origin}   ->   ${tripDetails.destination}`, 20, yPos);

    yPos += 8;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`Date: ${tripDetails.departDate} ${tripDetails.returnDate ? `(Return: ${tripDetails.returnDate})` : ''}`, 20, yPos);
    doc.text(`Bus Operator: ${tripDetails.operator}`, 110, yPos);

    yPos += 7;
    doc.text(`Bus Type: ${tripDetails.type}`, 20, yPos);
    doc.text(`Passengers: ${tripDetails.passengers}`, 110, yPos);

    yPos += 7;
    const stopsText = tripDetails.stops.length > 0 ? tripDetails.stops.join(', ') : 'None';
    doc.text(`Stops: ${stopsText}`, 20, yPos);

    yPos += 20;

    // --- 2. PASSENGER DETAILS ---
    addSectionTitle('Passenger Details', yPos);
    yPos += 12;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(`Name:`, 20, yPos); doc.setFont('helvetica', 'bold'); doc.text(`${name}`, 40, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(`Age/Gender:`, 110, yPos); doc.setFont('helvetica', 'bold'); doc.text(`${age} / ${gender}`, 135, yPos);

    yPos += 7;
    doc.setFont('helvetica', 'normal');
    doc.text(`Email:`, 20, yPos); doc.setFont('helvetica', 'bold'); doc.text(`${email}`, 40, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(`Phone:`, 110, yPos); doc.setFont('helvetica', 'bold'); doc.text(`${phone}`, 135, yPos);

    yPos += 25;

    // --- 3. FARE SUMMARY ---
    addSectionTitle('Fare Summary', yPos);
    yPos += 10;

    // Fare Box
    doc.setFillColor(248, 250, 252); // Slate-50
    doc.setDrawColor(226, 232, 240); // Slate-200
    doc.rect(20, yPos, pageWidth - 40, 50, 'FD'); // Fill and Border

    yPos += 12;
    doc.setFont('helvetica', 'normal');
    doc.text(`Base Fare:`, 25, yPos); 
    doc.text(`INR ${fareDetails.basePrice.toLocaleString('en-IN')}`, pageWidth - 25, yPos, { align: 'right' });
    
    yPos += 8;
    doc.text(`GST (18%):`, 25, yPos); 
    doc.text(`INR ${fareDetails.gst.toLocaleString('en-IN')}`, pageWidth - 25, yPos, { align: 'right' });

    yPos += 8;
    doc.line(25, yPos, pageWidth - 25, yPos);

    yPos += 8;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(15, 23, 42); // Slate-900
    doc.text(`Total Payable:`, 25, yPos); 
    doc.text(`INR ${fareDetails.totalPrice.toLocaleString('en-IN')}`, pageWidth - 25, yPos, { align: 'right' });

    yPos += 8;
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42); // Slate-900
    doc.text(`Payment Status:`, 25, yPos); 
    doc.setTextColor(220, 38, 38); // Red-600
    doc.text(`Incomplete`, pageWidth - 25, yPos, { align: 'right' });

    // --- FOOTER ---
    doc.setTextColor(100, 116, 139); // Slate-500
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(10);
    doc.text('Thank you for choosing SKT Express!', pageWidth / 2, 280, { align: 'center' });
    doc.text('This is a computer-generated document. No signature is required.', pageWidth / 2, 285, { align: 'center' });

    // Trigger PDF download
    doc.save('booking-bill.pdf');
  };

  return (
    <button
      onClick={handleGeneratePDF}
      type="button"
      className="w-full mt-4 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-4 rounded-md transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex justify-center items-center gap-2"
    >
      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      Download Bill (PDF)
    </button>
  );
}