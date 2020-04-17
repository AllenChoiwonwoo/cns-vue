<template>
  <!-- <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <header class="modal-header">       
            <slot name="header">
              default header
            </slot>
        </header>
        <content class="modal-content">
          <slot></slot>
        </content>
        <footer class="modal-footer">
          <slot name="footer">
            <button @click="$emit('close')">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition> -->

    <transition name="modal" appear>
    <div class="modal modal-mask" @click.self="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">
          <header class="modal-header">
              <slot name="header">
                default header
              </slot>
          </header>
          <content class="modal-content">
            <slot></slot>
          </content>
          <!-- <div class="modal-content">
            <slot/>
          </div> -->
          <footer class="modal-footer">
            <slot name="footer">
              <button @click="$emit('close')">Close</button>
            </slot>
          </footer>
        </div>
      </div>
    </div>
  </transition>


    <!-- <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper modal-dialog modal-dialog-centered">
        <div class="modal-container">

          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Create Post</h5>
            <button  @click="$emit('close')" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div> -->
          <!-- <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div> -->

          <!-- <div class="modal-body">
            <slot name="body">
              default body
            </slot>
          </div> -->
          <!-- <slot></slot>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="create_title_text">Title</label>
                <input type="text" class="form-control" id="create_title_text" placeholder="Title">
              </div>
              <div class="form-group">
                <label for="create_content_text">Content</label>
                <textarea class="form-control" rows="3" id="create_content_text"></textarea>
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="save_post_btn">Save Post</button>
     
            <slot name="footer">
              default footer
              
            </slot>
            <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
          </div>
        </div>
      </div>
    </div>
  </transition> -->
</template>

<style lang="stylus" scoped>
// .modal {
//   &.modal-overlay {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: fixed;
//     z-index: 300;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.5);
//   }

//   &-window {
//     background: #fff;
//     border-radius: 4px;
//     overflow: hidden;
//   }

//   &-content {
//     padding: 10px 20px;
//   }

//   &-footer {
//     background: #ccc;
//     padding: 10px;
//     text-align: right;
//   }
// }

// // 오버레이 트랜지션
// .modal-enter-active, .modal-leave-active {
//   transition: opacity 0.4s;

//   // 오버레이에 포함되어 있는 모달 윈도의 트랜지션
//   .modal-window {
//     transition: opacity 0.4s, transform 0.4s;
//   }
// }

// // 딜레이가 적용된 모달 윈도가 제거된 후에 오버레이가 사라짐
// .modal-leave-active {
//   transition: opacity 0.6s ease 0.4s;
// }

// .modal-enter, .modal-leave-to {
//   opacity: 0;

//   .modal-window {
//     opacity: 0;
//     transform: translateY(-20px);
//   }
// }


.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 700px;
  min-width : 500px
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.model-content {
  padding: 10px 20px;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>