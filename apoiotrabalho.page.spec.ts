import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ApoiotrabalhoPage } from './apoiotrabalho.page';

describe('ApoiotrabalhoPage', () => {
  let component: ApoiotrabalhoPage;
  let fixture: ComponentFixture<ApoiotrabalhoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ApoiotrabalhoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ApoiotrabalhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
