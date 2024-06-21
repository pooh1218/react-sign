// src/components/Header.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="tab-bar">
            <div className="tab-item-icon">
                <svg flex-wrap= "wrap" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083c.54-1.127 1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2c1.154 0 2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183c.54 1.127.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093C18.276 22 16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012c-1.175-1.012-1.419-2.705-1.906-6.093z"/><path stroke-linecap="round" d="M12 15v3"/></g></svg>
                <div className="tab-item-label">Home</div>
            </div>
            <div className="tab-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 5.18L10.59 16.6l-4.24-4.24l1.41-1.41l2.83 2.83l10-10zm-2.21 5.04c.13.57.21 1.17.21 1.78c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8c1.58 0 3.04.46 4.28 1.25l1.44-1.44A9.9 9.9 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10c0-1.19-.22-2.33-.6-3.39z"/></svg>
                <div className="tab-item-label">Task</div>
            </div>
            <div className="tab-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.005 16.94v2.063h5v2h-12v-2h5V16.94a8 8 0 0 1-7-7.938v-6h16v6a8 8 0 0 1-7 7.938m-7-11.937v4a6 6 0 1 0 12 0v-4zm-5 0h2v4h-2zm20 0h2v4h-2z"/></svg>
                <div className="tab-item-label">Team</div>
            </div>
            <div className="tab-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M17.42 3a2 2 0 0 1 1.649.868l.087.14L22.49 9.84a2 2 0 0 1-.208 2.283l-.114.123l-9.283 9.283a1.25 1.25 0 0 1-1.666.091l-.102-.09l-9.283-9.284a2 2 0 0 1-.4-2.257l.078-.15l3.333-5.832a2 2 0 0 1 1.572-1.001L6.58 3zm0 2H6.58l-3.333 5.833L12 19.586l8.753-8.753zM7.293 9.293a1 1 0 0 1 1.32-.083l.094.083L12 12.586l3.293-3.293a1 1 0 0 1 1.497 1.32l-.083.094l-3.823 3.823a1.25 1.25 0 0 1-1.666.091l-.102-.09l-3.823-3.824a1 1 0 0 1 0-1.414"/></g></svg>
                <div className="tab-item-label">VIP</div>
            </div>
            <div className="tab-item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 16v-5q0-.425.288-.712T6 10t.713.288T7 11v5q0 .425-.288.713T6 17t-.712-.288T5 16m6 0v-5q0-.425.288-.712T12 10t.713.288T13 11v5q0 .425-.288.713T12 17t-.712-.288T11 16m-8 5q-.425 0-.712-.288T2 20t.288-.712T3 19h18q.425 0 .713.288T22 20t-.288.713T21 21zm14-5v-5q0-.425.288-.712T18 10t.713.288T19 11v5q0 .425-.288.713T18 17t-.712-.288T17 16m4-8H2.9q-.375 0-.638-.262T2 7.1v-.55q0-.275.138-.475T2.5 5.75l8.6-4.3q.425-.2.9-.2t.9.2l8.55 4.275q.275.125.413.375t.137.525V7q0 .425-.287.713T21 8M6.45 6h11.1zm0 0h11.1L12 3.25z"/></svg>
                <div className="tab-item-label">ME</div>
            </div>
        </div>
    );
};

export default Footer;
