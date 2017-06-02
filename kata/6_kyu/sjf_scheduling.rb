# // Scheduling (Shortest Job First or SJF) //
# Scheduling is how the processor decides which jobs(processes) get to use the processor and for how long

# The method should take:
# 1. "jobs" a non-empty array of positive integers. They represent the clock-cycles(cc) needed to finish the job
# 2. "index" a positive integer. That represents the job we're interested in.

# SJF returns:
# A positive integer representing the cc it takes to complete the job at index.



def SJF(jobs, index)
  cc = 0
  job_val = jobs[index]

  # if any jobs in the array are "smaller" than our job - or equal to AND comes before our job - add it to cc (clock-cycles)
  jobs.each_with_index do |val, idx|
    if val < job_val || idx < index && val == job_val
      cc += val
    end
  end
  return cc += job_val
end

p sjf([3,10,20,1,2], 1)
