package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	//fmt.Println(os.Args)
	if len(os.Args) < 2 {
		fmt.Println("No command provided")
		os.Exit(2)
	}

	cmd := os.Args[1]

	switch cmd {
	case "greet":
		msg := "REMINDERS CLI - CLI BASICS"
		if len(os.Args) > 2 {
			f := strings.Split(os.Args[2], "=")
			if len(f) == 2 && f[0] == "--msg" {
				msg = f[1]
			}
		}
		fmt.Println("Hello and welcome:", msg)
	case "help":
		fmt.Println("Some help message ")
	default:
		{
			fmt.Println("Unknown command:", cmd)
		}
	}
}