import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  const Wrapper = styled.section`

  .container{
    margin-top: 6rem;
    text-align: center;

    .contact-form{
      max-width: 50rem;
      margin: auto;

      .contact-inputs{
        display: flex;
        flex-direction: column;
        gap: 3rem;
        input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
        <h2 className='common-heading'>Feel free to contact us</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56901.42099697064!2d75.70430893157858!3d26.956167964766617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db30bbe3b8d23%3A0x81b99ea52007f3b2!2sJhotwara%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1707208662364!5m2!1sen!2sin" width="100%" height="450" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        <div className="container">
          <div className="contact-form">
            <form action="https://formspree.io/f/xbjngzdy" method='POST' className='contact-inputs'>
              <input type="text" name='username' placeholder='username' autoComplete='off' required/>
              <input type="email" name='Email' placeholder='Email' autoComplete='off' required/>
              <textarea name="message" cols="30" rows="6" autoComplete='off' required></textarea>
              <input type="submit" value="send" />
            </form>
          </div>
        </div>
    </Wrapper>
  )
}

export default Contact

// Formspree website