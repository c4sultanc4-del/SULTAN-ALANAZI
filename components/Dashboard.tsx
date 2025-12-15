import React, { useState } from 'react';
import { Objective, MeetingAgendaItem } from '../types';

const objectives: Objective[] = [
  {
    title: "Reduce Administrative Burden",
    description: "Identify and eliminate redundant paperwork currently required for transferring STEMI patients."
  },
  {
    title: "Optimize Transfer Efficiency",
    description: "Establish a direct correlation between the reduction of required forms and the decrease in 'Door-in to Door-out' times."
  },
  {
    title: "Standardize Documentation",
    description: "Propose the consolidation of multiple transfer documents into a single, unified 'STEMI Transfer Checklist' for system-wide adoption."
  }
];

const agendaItems: MeetingAgendaItem[] = [
  {
    id: '1',
    time: '11:00 AM',
    title: 'Call to Order and Contextual Overview',
    description: [
      'Welcome remarks and review of the agenda.',
      'Contextual framing: Impact of excessive paperwork on delays.'
    ],
    lead: 'Sultan Alanazi'
  },
  {
    id: '2',
    time: '11:15 AM',
    title: 'Audit of Current Transfer Documentation',
    description: [
      'Document Review: Display of all current forms.',
      'Pain Points: Feedback from ER physicians/nurses.',
      'Redundancy Analysis: Identifying duplicate data fields.'
    ]
  },
  {
    id: '3',
    time: '11:30 AM',
    title: 'Strategy for Documentation Minimization',
    description: [
      'Consolidation Proposal: "Single Sheet" concept.',
      'Process Modernization: Digital approvals vs physical signatures.',
      'Compliance Review: Minimum legal/medical data required.'
    ]
  },
  {
    id: '4',
    time: '11:50 AM',
    title: 'Implications for Pathway Scale-Up',
    description: [
      'Onboarding peripheral hospitals (e.g., Al-Qaisumah).',
      'Ensuring standardized adoption across the cluster.'
    ]
  },
  {
    id: '5',
    time: '12:10 PM',
    title: 'Action Plan and Next Steps',
    description: [
      'Task Assignment: Drafting "Unified STEMI Transfer Form".',
      'Timeline Establishment: Target date for pilot.'
    ]
  }
];

export const Dashboard: React.FC = () => {
  const [reminderSet, setReminderSet] = useState(false);

  const handleAddToCalendar = () => {
    // Meeting: Dec 16, 2025, 11:00 AM - 12:30 PM AST (Arabia Standard Time, UTC+3)
    // UTC Start: 08:00 AM
    // UTC End: 09:30 AM
    const title = encodeURIComponent("STEMI Pathway Plan 2026");
    const details = encodeURIComponent("Meeting to discuss the STEMI pathway plan for 2026. Join via Teams link provided in dashboard.");
    const location = encodeURIComponent("https://teams.live.com/meet/9381348806465?p=8RxC0oK2uiZiZc5345");
    const dates = "20251216T080000Z/20251216T093000Z";
    
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
    
    window.open(googleUrl, '_blank');
  };

  const handleSetReminder = async () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notifications");
      return;
    }

    const permission = await Notification.requestPermission();
    
    if (permission === "granted") {
      setReminderSet(true);
      new Notification("Reminder Set", { 
        body: "You will be notified 15 minutes before the STEMI Pathway Plan 2026 meeting.",
        icon: "https://cdn-icons-png.flaticon.com/512/2965/2965358.png" // Generic calendar icon
      });
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Meeting Header Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-xs font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            Upcoming Meeting
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">STEMI Pathway Plan 2026</h1>
          <div className="space-y-2 text-slate-600 mt-3">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span className="font-medium">Tuesday, December 16, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>11:00 AM - 12:30 PM (AST)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <span>Organizer: <span className="font-medium text-slate-900">Sultan Alanazi</span></span>
            </div>
          </div>
        </div>
        
        <div className="flex-shrink-0 w-full lg:w-auto flex flex-col gap-3">
          <a 
            href="https://teams.live.com/meet/9381348806465?p=8RxC0oK2uiZiZc5345" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full lg:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#464775] hover:bg-[#3f406a] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 14V8c0-1.1-.9-2-2-2h-3V5a1 1 0 00-2 0v1H9V5a1 1 0 00-2 0v1H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zM4 8h16v6H4V8z"/>
              <path d="M21.5 3H2.5C1.1 3 0 4.1 0 5.5v13C0 19.9 1.1 21 2.5 21h19c1.4 0 2.5-1.1 2.5-2.5v-13C24 4.1 22.9 3 21.5 3zM22 18.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5h19a.5.5 0 0 1 .5.5v13z" opacity="0"/>
              <path d="M17 10H7v4h10v-4z"/> 
            </svg>
            Join Teams Meeting
          </a>
          
          <div className="flex gap-2 w-full">
            <button
              onClick={handleAddToCalendar}
              className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg className="w-4 h-4 mr-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Add to Calendar
            </button>
            <button
              onClick={handleSetReminder}
              disabled={reminderSet}
              className={`flex-1 inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                reminderSet 
                  ? 'bg-teal-50 border-teal-200 text-teal-700 cursor-default' 
                  : 'border-slate-300 text-slate-700 bg-white hover:bg-slate-50'
              }`}
            >
              {reminderSet ? (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Reminder Set
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                  Set Reminder
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Meeting Objectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {objectives.map((obj, idx) => (
            <div key={idx} className="bg-teal-50 rounded-lg p-5 border border-teal-100">
              <h3 className="font-semibold text-teal-900 mb-2">{obj.title}</h3>
              <p className="text-sm text-teal-800 leading-relaxed">{obj.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-900">Agenda: STEMI Pathway Plan 2026</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {agendaItems.map((item) => (
            <div key={item.id} className="p-6 hover:bg-slate-50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 w-24">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm font-semibold rounded-md border border-slate-200">
                    {item.time}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
                {item.lead && (
                  <div className="flex-shrink-0 text-sm font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded">
                    Lead: {item.lead}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-semibold text-blue-900 mb-2">Required Action Items</h3>
        <p className="text-sm text-blue-800 mb-4">Preparation for upcoming meeting:</p>
        <ul className="space-y-2 text-sm text-blue-800">
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span><strong>ER Head Nurse (KKGH):</strong> Digital copies of current transfer forms.</span>
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span><strong>Cath Lab Head Nurse:</strong> Documentation requirements for accepting patients.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};