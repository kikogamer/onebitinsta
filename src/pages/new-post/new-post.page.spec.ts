import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../app/explore-container/explore-container.module';

import { NewPost } from './new-post.page';

describe('NewPostPage', () => {
  let component: NewPost;
  let fixture: ComponentFixture<NewPost>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewPost],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NewPost);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
