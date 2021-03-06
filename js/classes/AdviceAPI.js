export default class AdviceAPI {
  constructor() {
    this.url = 'https://api.adviceslip.com/advice';
  }
  async getAdviceById(id) {
    try {
      const response = await fetch(`${this.url}/${id}`);
      if (200 <= response.status < 300) {
        return response.json();
      } else {
        throw new Error('Something went wrong.');
      }
    } catch (err) {
      throw new Error(err);
    }
  }
  async getRandomAdvice() {
    try {
      const response = await fetch(this.url);
      if (200 <= response.status < 300) {
        return response.json();
      } else {
        throw new Error('Something went wrong.');
      }
    } catch (err) {
      throw new Error(err);
    }
  }
  async getAdvicesBySelect(selectValue) {
    try {
      const response = await fetch(`${this.url}/search/${selectValue}`);
      if (200 <= response.status < 300) {
        return response.json();
      } else {
        throw new Error('Something went wrong.');
      }
    } catch (err) {
      throw new Error(err);
    }
  }
}
