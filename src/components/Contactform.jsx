import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify'

export default function Contactform() {
  const form = useRef();
  
  const [formData, setFormData] = useState({
    username: '',
    businessName: '',
    email: '',
    phoneNo: '',
    monthlyBilling: '',
    NoofProviders: '',
    totalAR: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let errorMsg = '';
    switch (name) {
      case 'username':
        if (!value.trim()) errorMsg = 'Name is required';
        break;
      case 'businessName':
        if (!value.trim()) errorMsg = 'Business Name is required';
        break;
      case 'email':
        if (!value) {
          errorMsg = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          errorMsg = 'Email address is invalid';
        }
        break;
      case 'phoneNo':
        if (!value) {
          errorMsg = 'Phone Number is required';
        } else if (!/^\+?[\d\s-]{10,}$/.test(value)) {
          errorMsg = 'Phone Number is invalid';
        }
        break;
      case 'monthlyBilling':
        if (!value) errorMsg = 'Monthly Billing is required';
        else if (isNaN(value) || Number(value) < 0) errorMsg = 'Must be a valid number';
        break;
      case 'NoofProviders':
        if (!value) errorMsg = 'Number of Providers is required';
        else if (isNaN(value) || Number(value) < 1) errorMsg = 'Must be at least 1';
        break;
      case 'totalAR':
        if (!value) errorMsg = 'Total AR is required';
        else if (isNaN(value) || Number(value) < 0) errorMsg = 'Must be a valid number';
        break;
      case 'message':
        if (!value.trim()) errorMsg = 'Message is required';
        break;
      default:
        break;
    }
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const errorMsg = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: errorMsg
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors = {};
    let isValid = true;
    Object.keys(formData).forEach(key => {
      const errorMsg = validateField(key, formData[key]);
      if (errorMsg) {
        newErrors[key] = errorMsg;
        isValid = false;
      }
    });

    setErrors(newErrors);

    if (isValid) {
      // By using form.current.submit(), we bypass the fetch and allow FormSubmit to show its activation/captcha page.
      form.current.submit();
    } else {
      toast.error('Please fix the errors in the form.');
    }
  };

  return (
    <div>
            <form ref={form} action="https://formsubmit.co/info@thrivemedrcm.com" method="POST" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="space-y-4 mt-8">
                <div>
                  <input type="text" placeholder="Name" name='username' value={formData.username} onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border ${errors.username ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300 text-slate-800 dark:text-slate-200 placeholder-slate-400`} />
                  {errors.username && <p className="text-red-500 text-xs mt-1 ml-1">{errors.username}</p>}
                </div>

                <div>
                  <input type="text" placeholder="Business Name" name='businessName' value={formData.businessName} onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border ${errors.businessName ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300 text-slate-800 dark:text-slate-200 placeholder-slate-400`} />
                  {errors.businessName && <p className="text-red-500 text-xs mt-1 ml-1">{errors.businessName}</p>}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input type="email" placeholder="Email" name='email' value={formData.email} onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border ${errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300 text-slate-800 dark:text-slate-200 placeholder-slate-400`} />
                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                  </div>

                  <div>
                    <input type="tel" placeholder="Phone No." name='phoneNo' value={formData.phoneNo} onChange={handleChange}
                      className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border ${errors.phoneNo ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300 text-slate-800 dark:text-slate-200 placeholder-slate-400`} />
                    {errors.phoneNo && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phoneNo}</p>}
                  </div>
                </div>

                <div>
                  <input type="number" placeholder="Monthly Billing" name='monthlyBilling' value={formData.monthlyBilling} onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border ${errors.monthlyBilling ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300 text-slate-800 dark:text-slate-200 placeholder-slate-400`} />
                  {errors.monthlyBilling && <p className="text-red-500 text-xs mt-1 ml-1">{errors.monthlyBilling}</p>}
                </div>

                <div>
                  <input type="number" placeholder="No. of Providers" name='NoofProviders' value={formData.NoofProviders} onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border ${errors.NoofProviders ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300 text-slate-800 dark:text-slate-200 placeholder-slate-400`} />
                  {errors.NoofProviders && <p className="text-red-500 text-xs mt-1 ml-1">{errors.NoofProviders}</p>}
                </div>

                <div>
                  <input type="number" placeholder="Total AR" name='totalAR' value={formData.totalAR} onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border ${errors.totalAR ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300 text-slate-800 dark:text-slate-200 placeholder-slate-400`} />
                  {errors.totalAR && <p className="text-red-500 text-xs mt-1 ml-1">{errors.totalAR}</p>}
                </div>

                <div>
                  <textarea placeholder="Your Message" name='message' rows="4" value={formData.message} onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-800/50 border ${errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'} rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all duration-300 text-slate-800 dark:text-slate-200 placeholder-slate-400 resize-none`}></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
                </div>
              </div>

              <button type="submit"
                className="mt-8 flex items-center justify-center text-sm w-full rounded-xl px-6 py-3.5 bg-gradient-to-r from-teal-500 to-blue-600 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5 transition-all duration-300 text-white font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2"
                  viewBox="0 0 548.244 548.244">
                  <path fillRule="evenodd"
                    d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                    clipRule="evenodd" />
                </svg>
                Send Message
              </button>
            </form>

            <ul class="mt-4 flex flex-wrap justify-center gap-6">
              <li class="flex items-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor'
                  viewBox="0 0 479.058 479.058">
                  <path
                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                    data-original="#000000" />
                </svg>
                <a href="mailto:info@thrivemedrcm.com" class="text-sm ml-4">
                  <strong>info@thrivemedrcm.com</strong>
                </a>
              </li>
              <li class="flex items-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor'
                  viewBox="0 0 482.6 482.6">
                  <path
                    d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                    data-original="#000000"></path>
                </svg>
                <a href="tel:+1 908-270-2999" class="text-sm ml-4">
                  <strong>+1 908-270-2999</strong>
                </a>
              </li>
            </ul>
          </div>
  )
}
