import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGalleryComponent } from './ngx-gallery.component';
import { NgxGalleryModule } from './ngx-gallery.module';

describe('NgxGalleryComponent', () => {
  let component: NgxGalleryComponent;
  let fixture: ComponentFixture<NgxGalleryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ NgxGalleryModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGalleryComponent);
    component = fixture.componentInstance;
    component.options = [];
    component.images = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
