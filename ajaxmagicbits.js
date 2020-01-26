var magic_css= magic_css();
var drop_css= drop_css();

function magic_clean_str (str) {
    return str.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, function (char) {
        switch (char) {
            case "\0":
                return "\\0";
            case "\x08":
                return "\\b";
            case "\x09":
                return "\\t";
            case "\x1a":
                return "\\z";
            case "\n":
                return "\\n";
            case "\r":
                return "\\r";
            case "\"":
            case "'":
            case "\\":
            case "%":
                return "\\"+char; // prepends a backslash to backslash, percent,
                                  // and double/single quotes
            default:
                return char;
        }
    });
}


//====================== create message pop ups ==========================
function magic_message(message_to_display)
{


var alert_box=
magic_css+'<!-- The Modal -->'+
    '<div id="msg_alert_myModal" class="msg_alert_modal" onclick="this.style.display=\'none\';" style="z-index:99999;">'+
     '<!-- Modal content -->'+
       '<div class="msg_modal-content ">'+
         '<span class="msg_modalclose" onclick="document.getElementById(\'msg_alert_myModal\').style.display=\'none\';">&times;</span>'+
        '<p>'+message_to_display+'</p>'+
      '</div>'+
    '</div>';


return alert_box;
}

function magic_screen(message_to_display)
{

 var alert_box=
magic_css+'<!-- The Modal -->'+
    '<div id="msg_alert_myModal" class="msg_alert_modal"style="z-index:99999;">'+
      '<!-- Modal content -->'+
      '<div class="msg_modal-content">'+
        '<span class="btn btn-primary" onclick="document.getElementById(\'msg_alert_myModal\').style.display=\'none\';" style="float:right;">&times;</span>'+
        '<p>'+message_to_display+'</p>'+
      '</div>'+
    '</div>';


return $alert_box;
}



function magic_modal(message_to_display)
{

 var alert_box=
    magic_css+'<!-- The Modal -->'+
        '<div id="msg_alert_myModal" class="msg_alert_modal"style="z-index:99;">'+
          '<!-- Modal content -->'+
          '<div class="msg_modal-content_banner" style="max-height:600px; overflow-y:auto;">'+
            '<span class="btn btn-primary" onclick="document.getElementById(\'msg_alert_myModal\').style.display=\'none\';" style="float:right;">&times;</span>'+
            '<p>'+message_to_display+'</p>'+
          '</div>'+
        '</div>';


return alert_box;
}


function magic_error_message(message_to_display)
{

    var alert_box=
        magic_css+'<!-- The Modal -->'+
            '<div id="msg_alert_myModal" class="msg_alert_modal" onclick="this.style.display=\'none\';" style="z-index:99999;">'+
              '<!-- Modal content -->'+
              '<div class="msg_modal-content" style="background-color:darkred;">'+
                '<span class="msg_modalclose" onclick="document.getElementById(\'msg_alert_myModal\').style.display=\'none\';">&times;</span>'+
                '<p style="color:#FFF;">'+message_to_display+'</p>'+
              '</div>'+
            '</div>';

    return alert_box;
}

function magic_button(name_n_id, value_text, additional_attributes)
{


    var newbtn='<input type="submit" name="'+name_n_id+'" id="'+name_n_id+'" value="'+value_text+'" class="btn btn-primary" '+additional_attributes+'/>';

    var btnstr=newbtn;

    return btnstr;

}

function magic_input(name_n_id, placeholder, additional_attributes)
{

    var newtxt='<input type="text" name="'+name_n_id+'" id="'+name_n_id+'" placeholder="'+placeholder+'" class="form-control" '+additional_attributes+'/>';

    var txtstr=newtxt;

    return txtstr;

}

function magic_plain_button(name_n_id, name_text, additional_attributes)
{


    var newbtn='<div name="'+name_n_id+'" id="'+name_n_id+'" class="btn btn-primary" '+additional_attributes+'>'+name_text+'</div>';

    var pbtnstr=newbtn;

    return pbtnstr;

}

function magic_dropdown(title, dropdown_items, inline_css_yes_no)
{

        var inline_css=drop_css;

        if(inline_css_yes_no=='no'){
            var inline_css="";
        }

      var dropdown = 
      inline_css+'<div class="table_cell_dropdown">'+
          '<div class="table_cell_dropbtn">'+title+'</div>'+
          '<div class="table_cell_dropdown-content">'+
            +dropdown_items+
          '</div>'+
        '</div>';

        return dropdown;

}


function magic_link(location, name_text, additional_attributes)
{

    var newlinkstr='<a href="'+location+'"  '+additional_attributes+'>'+name_text+'</a>';

    var linkstr=newlinkstr;

    return linkstr;

}

function magic_button_link(location, name_text, additional_attributes)
{

    var newlinkstr='<a href="'+location+'" class="btn btn-primary" '+additional_attributes+'>'+name_text+'</a>';

    var linkstr=newlinkstr;

    return linkstr;

}


function magic_validate_required(message_to_display, attach_to)
{


    if(message_to_display==''){

        var message_to_display ="Please Fill Out this Field";
    }

    var proceed_state="True";

     validate_alert='<em id="'+attach_to+'_validate_span" class="validate_error_class">'+message_to_display+'</em>';

     var validate_label =document.getElementById(attach_to+'_validate_span');

    if(document.getElementById(attach_to).value==""){
    

    if (typeof(validate_label) != 'undefined' && validate_label != null)
        {
              
         document.getElementById(attach_to+'_validate_span').remove();

        }
        
    $('#'+attach_to+'').before(validate_alert);

    proceed_state="False";

    }else{

    if (typeof(validate_label) != 'undefined' && validate_label != null)
        {
              
         document.getElementById(attach_to+'_validate_span').remove();

        }

    }

    return proceed_state;

}




function magic_validate_required(message_to_display, attach_to)
{


    if(message_to_display==''){

        var message_to_display ="Invalid Email";
    }

    var proceed_state="True";

     validate_alert='<em id="'+attach_to+'_validate_span" class="validate_error_class">'+message_to_display+'</em>';

     var validate_label =document.getElementById(attach_to+'_validate_span');

     filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


        if (filter.test(email.value)) {
          // Yay! valid
          if (typeof(validate_label) != 'undefined' && validate_label != null)
                {
                      
                 document.getElementById(attach_to+'_validate_span').remove();

                }      
            }else{

            if (typeof(validate_label) != 'undefined' && validate_label != null)
                    {
                          
                     document.getElementById(attach_to+'_validate_span').remove();

                    }
                    
                $('#'+attach_to+'').before(validate_alert);

                proceed_state="False";
          }

    return proceed_state;

}

function magic_css(){


    var magic_css='<style> .msg_alert_modal{display:block;position:fixed;z-index:1;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.4)}.msg_modal-content{background-color:#fefefe;margin:auto;padding:20px;border:1px solid #888;width:40%}.msg_modal-content_banner{background-color:#fefefe;margin:auto;padding:20px;border:1px solid #888;width:52%;font-size:16px}.msg_modalclose{color:#aaa;float:right;font-size:28px;font-weight:700}.msg_modalclose:focus,.msg_modalclose:hover{color:#000;text-decoration:none;cursor:pointer}.validate_error_class{font-size:11px;color:red}.hide_error_class{display:none}</style>';


    return magic_css;


}

function drop_css(){

    var drop_css='<style>.table_cell_dropbtn{font-size:16px;font-weight:700}.table_cell_dropdown{position:relative;display:inline-block}.table_cell_dropdown-content{display:none;position:absolute;background-color:#fff;min-width:160px;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1;text-align:left;padding-left:5px;border-left:2px solid #00f}.table_cell_dropdown-content a{color:#000;padding:12px 16px;text-decoration:none;display:block}.table_cell_dropdown-content span{color:#000;padding:12px 16px;text-decoration:none;display:block;cursor:pointer}.table_cell_dropdown-content a:hover{background-color:#ddd}.table_cell_dropdown-content span:hover{background-color:#ddd}.table_cell_dropdown:hover .table_cell_dropdown-content{display:block}tr:hover .table_cell_dropdown-content{display:block}</style>';

    return drop_css;
}



//====================== create message pop ups ==========================
