//update
$("#update").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}
    $.map(unindexed_array,function(n,i){ 
        data[n['name']] =n['value'];
        
    })
    // console.log(unindexed_array);

    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" :data
    }
    $.ajax(request).done(function(response){
        alert("Data Updated Successfully");
    })
})

   




//delete function
    $ondelete = $(".table tbody td a.delete");
    console.log($ondelete);
    $ondelete.click(function(){
        var id = $(this).attr("data-id");
        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }
        if(confirm("Do you really want to delete record")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully");
                location.reload()
            })
        }
    })

