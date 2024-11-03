"use client";
import React from "react";
// redux
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function Footer() {
  // redux
  const { colorClass } = useSelector((state: RootState) => state.style);

  return (
    <footer className="Footer container">
      <div className={`Footer__content ${colorClass}`}>
        <div className="Footer__column">
          <h4>Resources</h4>
          <ul>
            <li>Gift Cards</li>
            <li>Find a Store</li>
            <li>Membership</li>
            <li>Nike x NBA</li>
            <li>Nike Journal</li>
            <li>Site Feedback</li>
          </ul>
        </div>
        <div className="Footer__column">
          <h4>Help</h4>
          <ul>
            <li>Get Help</li>
            <li>Order Status</li>
            <li>Shipping and Delivery</li>
            <li>Returns</li>
            <li>Order Cancellation</li>
            <li>Payment Options</li>
            <li>Gift Card Balance</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="Footer__column">
          <h4>Company</h4>
          <ul>
            <li>About Nike</li>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Purpose</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div className="Footer__column">
          <h4>Promotions & Discounts</h4>
          <ul>
            <li>Student</li>
            <li>Military</li>
            <li>Teacher</li>
            <li>First Responders & Medical Professionals</li>
            <li>Birthday</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
