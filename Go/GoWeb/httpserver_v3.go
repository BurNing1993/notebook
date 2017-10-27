package main

import(
	"log"
	"net/http"
	"time"
)

func main(){
	server:=&http.Server{
		Addr:    ":4000",
		WriteTimeout:2*time.Second,
	}
	mux:=http.NewServeMux()
	mux.Handle("/",&myHandler{})
	mux.HandleFunc("/bye",sayBye)
	server.Handler=mux
	log.Println("Start Server")
	log.Fatal(server.ListenAndServe())

}

type myHandler struct{}

func (_ *myHandler) ServeHTTP(w http.ResponseWriter,r *http.Request)  {
	w.Write([]byte("Hello http Server v2,the request URL is"+r.URL.String()))
}

func sayBye(w http.ResponseWriter,r *http.Request){
	w.Write([]byte("Bye-Bye!"))
}


