"use strict";

import Client from "./client";

import { UPDATE_INTERVAL } from "./constants";

export default class Agent {
  constructor(client, busy, document, userIdentifier, sessionIdentifier, intervalIdentifier) {
    this.busy = busy;
    this.client = client;
    this.document = document;
    this.userIdentifier = userIdentifier;
    this.sessionIdentifier = sessionIdentifier;
    this.intervalIdentifier = intervalIdentifier;
  }

  initialise(callback) {
    this.client.initialise((content, userIdentifier, sessionIdentifier) => {
      this.userIdentifier = userIdentifier;

      this.sessionIdentifier = sessionIdentifier;

      this.startUpdates();

      callback(content);
    });
  }

  setDocument(document) {
    this.document = document;
  }

  startUpdates() {
    this.resetUpdates();

    const interval = UPDATE_INTERVAL;

    this.intervalIdentifier = setInterval(() => this.update(), interval);
  }

  stopUpdates() {
    this.resetUpdates();
  }

  resetUpdates() {
    if (this.intervalIdentifier !== null) {
      clearInterval(this.intervalIdentifier);

      this.intervalIdentifier = null;
    }
  }

  update() {
    if (this.busy) {
      return;
    }

    const workingContent = this.document.getWorkingContent(),
          editableContent = this.document.getEditableContent();

    this.busy = true;

    const success = this.client.updateDocument(this.userIdentifier, this.sessionIdentifier, workingContent, editableContent, (sessionExpired, pendingOperations) => {
    	if (sessionExpired) {
				alert("The session has expired. Please refresh!");

				return;
			}

      this.document.update(pendingOperations);

    	this.busy = false;
		});

    if (success) {
      this.document.synchroniseWorkingContent();
    } else {
      this.busy = false;
    }
  }

  static fromNothing() {
    const client = Client.fromNothing(),
          busy = false,
          document = null,  ///
          userIdentifier = null,  ///
					sessionIdentifier = null,	///
          intervalIdentifier = null, ///
          agent = new Agent(client, busy, document, userIdentifier, sessionIdentifier, intervalIdentifier);

    return agent;
  }
}
