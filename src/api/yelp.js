import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Air5nPqjBagdSfzdXZcKjSp0o-dzdkQq3NAUxIaifSunIR8jCPPPmZcSP96yHKHTenStbKxwuVDudO-MQ6THRksCn11nmWiwKz7xzIc9z5ojDoyiCwD_5TkVBwj0XXYx',
  },
});
