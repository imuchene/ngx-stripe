import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { NgStrClipboardService } from '../../core';

@Component({
  selector: 'ngstr-copy-link',
  template: `
    <div
      class="cursor-pointer font-normal px-3 py-1 text-sm border-l-2 text-gray-500 hover:text-indigo-600"
      (click)="copyLink()"
    >
      <span class="material-icons text-sm mr-3">content_copy</span>
      <span>Copy Link</span>
    </div>
  `
})
export class NgStrCopyLinkComponent {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private clipboard: NgStrClipboardService,
    private toastr: ToastrService
  ) {}

  copyLink() {
    try {
      this.clipboard.copy(this.document.defaultView.location.href);
      this.toastr.info('Paste it wherever you like', 'Page URL copied to the clipboard');
    } catch (err) {
      console.error(err);
    }
  }
}
