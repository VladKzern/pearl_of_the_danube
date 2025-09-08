import { useState } from "react";
import Modal from "./Modal";
import css from "./ConsultationModal.module.css";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Будь ласка, заповніть всі обов'язкові поля!");
      return;
    }
    if (details && !contactMethod) {
      alert("Будь ласка, виберіть спосіб зв’язку!");
      return;
    }
    console.log({ name, phone, details, contactMethod });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className={css.title}>Консультація</h2>
      <p className={css.subtitle}>
        Залиште свої контакти та, за потреби, коментар щодо питання чи запису на зустріч.
      </p>
      <form className={css.form} onSubmit={handleSubmit}>
        {/* Ім’я */}
        <label className={css.label}>
          <span className={css.labelText}>
            Ім’я <span className={css.required}>*</span>
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        {/* Телефон */}
        <label className={css.label}>
          <span className={css.labelText}>
            Номер телефону <span className={css.required}>*</span>
          </span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="^(\+380\d{9}|\+38\s?\(0\d{2}\)-\d{3}-\d{2}-\d{2}|0\d{2}-\d{3}-\d{2}-\d{2}|0\d{9})$"
            placeholder="+380XXXXXXXXX"
            required
          />
        </label>

        {/* Деталі */}
        <label className={css.label}>
          Деталі питання
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </label>

        {/* Радіо */}
        {details && (
          <div className={css.radioGroup}>
            <p>Як з вами зв’язатися? <span className={css.required}>*</span></p>
            <label className={css.radioLabel}>
              <input
                type="radio"
                name="contact"
                value="message"
                checked={contactMethod === "message"}
                onChange={(e) => setContactMethod(e.target.value)}
                required
              />
              <span>Текстове повідомлення (Viber/WhatsApp)</span>
            </label>
            <label className={css.radioLabel}>
              <input
                type="radio"
                name="contact"
                value="call"
                checked={contactMethod === "call"}
                onChange={(e) => setContactMethod(e.target.value)}
                required
              />
              <span>Перетелефонувати</span>
            </label>
          </div>
        )}

        <button type="submit" className={css.submitBtn}>
          Підтвердити
        </button>
      </form>
    </Modal>
  );
}