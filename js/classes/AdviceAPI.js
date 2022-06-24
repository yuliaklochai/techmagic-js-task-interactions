export default class AdviseAPI {
  constructor() {
    this.url = 'https://api.adviceslip.com/advice';
  }
  async getAdviceById(id) {
    try {
      const response = await fetch(`${this.url}/${id}`);
      const advices = await response.json();
      return advices.slip;
    } catch (e) {
      throw new Error(e);
    }
  }
  async getRandomAdvice() {
    try {
      const response = await fetch(this.url);
      return response.json();
    } catch (e) {
      throw new Error(e);
    }
  }
  async getAdvicesBySelect(selectValue) {
    try {
      const response = await fetch(`${this.url}/search/${selectValue}`);
      return response.json();
    } catch (e) {
      throw new Error(e);
    }
  }
}
