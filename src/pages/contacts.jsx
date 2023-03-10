const Contacts = () => {

    return (

        <div>
            <div data-aos="fade-left" data-aos-duration="500" data-aos-delay="200" data-aos-once="true" class="rn-contact-area section-height">
                <div class="inner">
                    <h5 class="title">
                        Contact With Me
                    </h5>
                    <div class="contact-form-wrapper">
                        <div class="introduce">
                            <div class="row">
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-group">
                                        <label for="name">Your Name</label>
                                        <input class="form-control form-control-lg" name="name" id="name" type="text"/>
                                    </div>
                                </div>

                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-group">
                                        <label for="phone">Phone Number</label>
                                        <input class="form-control" name="phone" id="phone" type="text"/>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input class="form-control form-control-sm" id="email" name="email" type="email" />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label for="subject">subject</label>
                                        <input class="form-control form-control-sm" id="subject" name="subject" type="text" />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label for="message">Your Message</label>
                                        <textarea name="message" id="message" cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <a href="#" class="rn-btn">
                                        <span>SEND MESSAGE</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );

}