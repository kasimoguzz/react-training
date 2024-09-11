import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./index";

describe("Counter Tests", () => {
  // Testlerde kullanılacak butonları ve sayacı (count) global olarak tanımlıyoruz.
  let increaseBtn, decreaseBtn, count;

  // Her testten önce çalışacak olan fonksiyon.
  // `beforeEach`, her testten önce component'i render eder ve butonlarla sayaç (count) elementini bulup değişkenlere atar.
  beforeEach(() => {
    console.log("her testten önce çalışacağım");
    render(<Counter />);  // Counter componentini render ediyoruz.
    increaseBtn = screen.getByText("+"); // '+' butonunu buluyoruz ve increaseBtn'e atıyoruz.
    decreaseBtn = screen.getByText("-"); // '-' butonunu buluyoruz ve decreaseBtn'e atıyoruz.
    count = screen.getByText("0"); // Başlangıç değeri 0 olan sayaç elemanını buluyoruz.
  });

  // Tüm testler başlamadan önce sadece bir kez çalışacak fonksiyon.
  // `beforeAll` fonksiyonu, test sürecinin en başında bir kere çalışır.
  beforeAll(() => {
    console.log("bir kere çalışacağım");
  });

  // Tüm testler bittikten sonra sadece bir kez çalışacak fonksiyon.
  // `afterAll` fonksiyonu, testler bittiğinde bir kez çalışır. Temizlik işlemleri için kullanılabilir.
  afterAll(() => {
    console.log("en son bir kere çalışacağım");
  });

  // Her testten sonra çalışacak olan fonksiyon.
  // `afterEach` fonksiyonu, her testin tamamlanmasından sonra çalışır. Testten sonra yapılacak işlemler için kullanılabilir.
  afterEach(() => {
    console.log("her testten sonra çalışacağım");
  });

  // 'increase' butonuna tıklayınca sayacın 1 artması beklenen test.
  test("increase btn", () => {
    fireEvent.click(increaseBtn); // 'increase' butonuna tıklama simülasyonu yapıyoruz.
    expect(count).toHaveTextContent("1"); // Tıklama sonrası sayacın değerinin 1 olmasını bekliyoruz.
  });

  // 'decrease' butonuna tıklayınca sayacın -1 olması beklenen test.
  test("decrease btn", () => {
    fireEvent.click(decreaseBtn); // 'decrease' butonuna tıklama simülasyonu yapıyoruz.
    expect(count).toHaveTextContent("-1"); // Tıklama sonrası sayacın değerinin -1 olmasını bekliyoruz.
  });
});
