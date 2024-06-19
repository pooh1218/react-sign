// src/components/MemberList.js
import React from 'react';
import './MemberList.css';

const MemberList = () => {
    const members = [
        { id: 1, email: 'example1@gmail.com', amount: '+$15.00' },
        { id: 2, email: 'example2@outlook.com', amount: '+$100.00' },
        // Add all members here
    ];

    return (
        <section className="member-list">
            {members.map(member => (
                <div key={member.id} className="member-item">
                    <p>{member.email}</p>
                    <p>{member.amount}</p>
                </div>
            ))}
        </section>
    );
};

export default MemberList;
