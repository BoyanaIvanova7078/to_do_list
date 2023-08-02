$(document).ready(function() {
    const task_input = $("#task_input");
    const task_list = $("#task_list");
  
    task_input.keypress(function(event) {
      if (event.which === 13) {
        const task_text = task_input.val().trim();
        if (task_text !== "") {
          addTask(task_text);
          task_input.val("");
        }
      }
    });
  
    function addTask(text) {
      const list_item = $("<li>").addClass("list-group-item task-item");
      const task_text_element = $("<span>").addClass("list-group-item-text").text(text);
      const edit_button = $("<button>").addClass("edit-btn").text("Edit");
      const save_button = $("<button>").addClass("save-btn").text("Save").hide();
      const delete_button = $("<button>").addClass("delete_button").text("Delete");
      const edit_input = $("<input>").attr("type", "text").addClass("form-control mb-5").val(text);
      
    
        list_item.append(task_text_element);
        list_item.append(edit_input);
        list_item.append(edit_button);
        list_item.append(save_button);
        list_item.append(delete_button);
        task_list.append(list_item);
       

      edit_button.click(function() {
        $(this).parent().addClass("edit-mode");
        $(this).siblings(".list-group-item-text").hide();
        $(this).siblings("input[type='text']").show();
        $(this).hide();
        $(this).siblings(".save-btn").show();

      });
  
      save_button.click(function() {
        const new_text = $(this).siblings("input[type='text']").val().trim();
        if ( new_text !== "") {
          $(this).siblings(".list-group-item-text").text(new_text).show();
          $(this).siblings("input[type='text']").hide();
          $(this).hide();
          $(this).siblings(".edit-btn").show();
          $(this).parent().removeClass("edit-mode");
          
        }
      });

      
  
      delete_button.click(function() {
        $(this).parent().remove();
      });


      {
        $( "#task_list" ).sortable();
      }

      
    }
  });
  