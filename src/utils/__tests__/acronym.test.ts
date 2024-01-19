import acronym from '../acronym';

describe('acronym function', () => {
  it('should return an acronym for a given name', () => {
    const result = acronym('Modern Software Development');
    expect(result).toBe('MSD');
  });

  it('should handle empty string and return an empty string', () => {
    const result = acronym('');
    expect(result).toBe('');
  });

  it('should handle a single-word name and return the first letter', () => {
    const result = acronym('OpenAI');
    expect(result).toBe('O');
  });

  it('should handle a name with non-alphabetic characters and return the acronym', () => {
    const result = acronym('123 Example - Name');
    expect(result).toBe('1EN');
  });

});
