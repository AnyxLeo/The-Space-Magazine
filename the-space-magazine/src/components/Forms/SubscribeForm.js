import React, { useEffect, useState } from "react";
import "./SubscribeForm.css";
import useStateForm from '../../Utilities/Functions/useStateForm';
import Logo from "../../assets/outerSpace.png";

const SubscribeForm = () => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [newInterests, setNewInterests] = useState([]);
    const [form, handleChange] = useStateForm({
        name: '',
        email: '',
        phone: '',
        interests: [],
        policy: false
    });

    const interestsOnChange = (checkboxEvent) => {
        let interestArray = newInterests;
        if (checkboxEvent.target.checked) {
            interestArray.push(checkboxEvent.target.name);
        } else {
            let index = interestArray.indexOf(checkboxEvent.target.name);
            console.log(index);
            if (index > -1)
                interestArray.splice(index, 1);
        }

        setNewInterests(interestArray);
        handleChange({ interests: interestArray });
    };


    const policyOnChange = (checkboxEvent) => handleChange({ policy: checkboxEvent.target.checked });
    const onSubmitForm = () => setIsFormSubmitted(true);
    useEffect(() => { console.log(form); }, [form]);

    return (
        <div className="galleries">
            <div className="content">
                <div className="subscribe-form">
                    {!isFormSubmitted && (
                        <form onSubmit={onSubmitForm}>
                            <h1>Subscribe</h1>
                            <div class="item">
                                <label for="name">Name<span>*</span></label>
                                <input id="name" type="text" name="name" onChange={handleChange} required />
                            </div>
                            <div class="item">
                                <label for="email">Email Address<span>*</span></label>
                                <input id="email" type="email" name="email" onChange={handleChange} required />
                            </div>
                            <div class="item">
                                <label for="phone">Phone</label>
                                <input id="phone" type="TEXT" name="phone" onChange={handleChange} />
                            </div>
                            <div class="answer">
                                <fieldset>
                                    <legend>Interests</legend>
                                    <div class="answer-answer">
                                        <div>
                                            <input type="checkbox" name="SpaceExploration" value="none" id="interest_1" onChange={interestsOnChange} />
                                            <label for="interest_1" class="checkbox"><span>Space Exploration</span></label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="SpaceForecast" value="none" id="interest_2" onChange={interestsOnChange} />
                                            <label for="interest_2" class="checkbox"><span>Space Forecast</span></label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="ExoPlanets" value="none" id="interest_3" onChange={interestsOnChange} />
                                            <label for="interest_3" class="checkbox"><span>Exo Planets</span></label>
                                        </div>
                                        <div>
                                            <input type="checkbox" name="Discoveries" value="none" id="interest_4" onChange={interestsOnChange} />
                                            <label for="interest_4" class="checkbox"><span>The most recent discoveries</span></label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="policy">
                                <input type="checkbox" name="policy" value="true" id="policy" onChange={policyOnChange} />
                                <label for="policy" class="checkbox">
                                    <span>I agree to the <a href="/Home">Space Magazine Policy.</a></span></label>
                            </div>
                            <div class="btn-block">
                                <button type="submit" href="/">SUBMIT</button>
                            </div>
                        </form>
                    )}
                    {isFormSubmitted && (
                        <div className="space">
                            <img
                                src={Logo}
                                className="space-logo"
                                alt="All you wanted to know about space in one place."
                            />
                            <h1>Thanks For Subscribe!!</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SubscribeForm;