import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import DanboxLayout from "@/layout/DanboxLayout";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Donate",
};

const CausesPage = () => {
  return (
    <DanboxLayout>
      {/* <PageBanner pageName="Donation" pageTitle="Make Donation" /> */}
      <div className="causes-details-wrapper fix section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="causes-details-items">
                <div className="details-content style-2">
                  <span className="sub-text">
                    <i className="far fa-heart" /> water
                  </span>
      
                  <form action="#" className="give-form">
        
                    <div className="give-purchase-form-wrap">
                      <div className="row g-4">
                        <div className="col-md-4 col-12">
                          <div className="single-personal-info">
                            <label>First Name</label>
                            <input
                              type="text"
                              className="give-input"
                              id="name"
                              placeholder="Enter Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-12">
                          <div className="single-personal-info">
                            <label htmlFor="lname">Last Name</label>
                            <input
                              type="text"
                              className="give-input"
                              id="lname"
                              placeholder="Enter Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 col-12">
                          <div className="single-personal-info">
                            <label htmlFor="lname">Last Name</label>
                            <input
                              type="text"
                              className="give-input"
                              id="lname1"
                              placeholder="Enter Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-12">
                          <div className="single-personal-info">
                            <label htmlFor="paddress">
                              Own Address <span>(Optional)</span>
                            </label>
                            <input
                              type="text"
                              className="give-input"
                              id="paddress"
                              placeholder="Your Address"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 col-12">
                          <div className="single-personal-info">
                            <label htmlFor="email">Email Address</label>
                            <input
                              type="email"
                              className="give-input"
                              id="email"
                              placeholder="Enter Email"
                            />
                          </div>
                        </div>
                        <div className="col-md-12 col-12">
                          <div className="donate-total-amount">
                            <div className="give-donation-total-label">
                              Donation Total:
                            </div>
                            <div className="give-final-total-amount">
                              <span>$</span>10
                            </div>
                            <button
                              type="submit"
                              className="theme-btn mt-4 mt-md-0"
                            >
                              <i className="far fa-heart" />
                              Donate Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DanboxLayout>
  );
};

export default CausesPage;
