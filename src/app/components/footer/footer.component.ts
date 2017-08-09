import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `    
    <footer class="footer">
      <div class="container">
        <p class="text-muted">Powered By <a href="http://librehealth.io/projects/lh-toolkit/" target="_blank">LibreHealth Toolkit</a></p>
      </div>
    </footer>
  `
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
