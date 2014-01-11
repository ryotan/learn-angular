'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('app/index.html');
  });

  it('bodyの先頭に Hello, World! と表示されていること', function() {
    expect(element('body > p:nth-child(1)').text()).toBe('Hello, World!');
  });

  it('次に、紹介されているスマホの全件数が表示されていること', function() {
    expect(element('body > p:nth-child(2)').text()).toBe('Total number of phones: 3');
  });

  it('スマホがリスト形式で件数分表示されていること', function() {
    expect(repeater('ul li').count()).toBe(3);
  });

  it('0始まりの数列が表示されていること', function() {
    expect(repeater('table#zero-origin tr:has("td")').count()).toBe(8);
    expect(element('table#zero-origin tr:nth-child(2) td').text()).toBe("0");
    expect(element('table#zero-origin tr:nth-child(3) td').text()).toBe("1");
    expect(element('table#zero-origin tr:nth-child(4) td').text()).toBe("2");
    expect(element('table#zero-origin tr:nth-child(5) td').text()).toBe("3");
    expect(element('table#zero-origin tr:nth-child(6) td').text()).toBe("4");
    expect(element('table#zero-origin tr:nth-child(7) td').text()).toBe("5");
    expect(element('table#zero-origin tr:nth-child(8) td').text()).toBe("6");
    expect(element('table#zero-origin tr:nth-child(9) td').text()).toBe("7");
  });

  it('0始まりの数列が表示されていること', function() {
    expect(repeater('table#one-origin tr:has("td")').count()).toBe(8);
    expect(element('table#one-origin tr:nth-child(2) td').text()).toBe("1");
    expect(element('table#one-origin tr:nth-child(3) td').text()).toBe("2");
    expect(element('table#one-origin tr:nth-child(4) td').text()).toBe("3");
    expect(element('table#one-origin tr:nth-child(5) td').text()).toBe("4");
    expect(element('table#one-origin tr:nth-child(6) td').text()).toBe("5");
    expect(element('table#one-origin tr:nth-child(7) td').text()).toBe("6");
    expect(element('table#one-origin tr:nth-child(8) td').text()).toBe("7");
    expect(element('table#one-origin tr:nth-child(9) td').text()).toBe("8");
  });

});
