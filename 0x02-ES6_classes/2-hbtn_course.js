/**
 * Helton course
 */
export default class HolbertonCourse {
  /**
   * Creates a new @see {@link HolbertonCourse}
   *
   * @param {String} name - course name
   * @param {Number} length - course length
   * @param {String[]} students - students name
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * course name
   */
  get name() {
    return this._name;
  }

  /**
   * name of the course
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * length of this course
   */
  get length() {
    return this._length;
  }

  /**
   * length of this course
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * student names in the course
   */
  get students() {
    return this._students;
  }

  /**
   * students name
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
