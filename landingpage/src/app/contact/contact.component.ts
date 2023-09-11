import { Component, ElementRef, ViewChild } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";


@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {
  @ViewChild("myForm") myForm!: ElementRef;
  @ViewChild("nameField") nameField!: ElementRef;
  @ViewChild("messageField") messageField!: ElementRef;
  @ViewChild("emailField") emailField!: ElementRef;
  @ViewChild("sendButton") sendButton!: ElementRef;

  email = new FormControl("", [Validators.required, Validators.email]);
  name = new FormControl("", [Validators.required]);
  message = new FormControl("", [Validators.required]);

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    messageField.disabled = true;
    emailField.disabled = true;
    sendButton.disabled = true;
    //animation

    let fd = new FormData();

    fd.append("name", nameField.value);
    fd.append("email", emailField.value);
    fd.append("message", messageField.value);

    if (this.allInputsValid()) {
      await fetch(
        "https://kevin-sven-lentz.developerakademie.net/send_mail/send_mail.php",
        {
          method: "POST",
          body: fd,
        }
      );
      nameField.value = "";
      emailField.value = "";
      messageField.value = "";
      this.createSuccessButton(sendButton);
    } else {
      nameField.disabled = false;
      messageField.disabled = false;
      emailField.disabled = false;
      sendButton.disabled = false;
    }
  }

  getErrorMessageEmail() {
    if (this.email.hasError("required")) {
      return "Your email is required";
    }
    return this.email.hasError("email") ? "Not a valid email" : "";
  }
  getErrorMessageName() {
    if (this.name.hasError("required")) {
      return "Your name is required";
    }
    return "";
  }
  getErrorMessageMessage() {
    if (this.name.hasError("required")) {
      return "Your message is empty";
    }
    return "";
  }

  allInputsValid() {
    if (
      this.name.status == "VALID" &&
      this.email.status == "VALID" &&
      this.message.status == "VALID"
    ) {
      return true;
    } else {
      return false;
    }
  }

  createSuccessButton(sendButton) {
    sendButton.innerHTML = "success";
    sendButton.style.background = "green";
    sendButton.style.border = "solid 2px green";
    sendButton.style.color = "white";
    sendButton.style.cursor = "unset";
    sendButton.style.fontSize = "28px";
  }
}
